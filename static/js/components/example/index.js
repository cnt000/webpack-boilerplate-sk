import { exampleUtils } from '../../utils';

const Example = async () => {
  console.log(exampleUtils('Example'));
  const postsPromise = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await postsPromise.json();
  console.log(JSON.stringify(posts));
  document.querySelector('body').innerHTML = 'Example work <blockquote>' + JSON.stringify(posts[0]) + '</blockquote>';
}

export default Example;