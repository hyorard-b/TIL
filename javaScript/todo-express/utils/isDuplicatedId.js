const isDuplicatedId = (array, id) => array.map(todo => todo.id).includes(id);

export default isDuplicatedId;