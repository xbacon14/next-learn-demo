import Layout from '../components/MyLayout.js'
import Link from 'next/link'

const PostLink = props => (
  <li>
    <Link href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
);

export default function Blog(){
  return (
    <Layout>
      <h1>Italus Blog</h1>
      <ul>
        <PostLink title="Hello next.js" />
        <PostLink title="Hello next.js is awesome" />
        <PostLink title="Deploy apps with zeit" />
      </ul>
    </Layout>
  );
}
