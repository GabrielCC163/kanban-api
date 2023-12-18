import { hash } from 'bcrypt';
import { v4 as uuidV4 } from 'uuid';

import createConnection from '../index';

async function create() {
  const connection = await createConnection();

  const id = uuidV4();
  const password = await hash('lets@123', 8);

  await connection.query(
    `INSERT INTO USERS(id, name, username, password, created_at)
    VALUES('${id}', 'admin', 'letscode', '${password}', 'now()')
    ON CONFLICT (username)
    DO NOTHING;`
  );

  await connection.close();
}

create().then(() => console.log('User admin created!'));
