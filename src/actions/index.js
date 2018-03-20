let todoid = 0;


export const addTodo = (text) =>{
  console.log(todoid++)
 return ({

  type: 'ADD_TODO',
  id : todoid++,
  text

})

}