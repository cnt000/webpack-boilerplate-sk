import { exampleUtilsDynamicImported } from '../../utils';

const ExampleDi = async () => {
  const postsPromise = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await postsPromise.json();
  return 'ExampleDi work <blockquote>' + exampleUtilsDynamicImported(JSON.stringify(posts[0])) + '</blockquote>';
}

export default ExampleDi;
