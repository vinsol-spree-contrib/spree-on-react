import orm from './orm';

const emptyDBState = orm.getEmptyState();
const session = orm.session(emptyDBState);

// This is a session for the ORM initalized with an empty DB state.
export default session;
