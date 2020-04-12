#### 👋 IMPORTANT: This is an example codebase created with [Divjoy](https://divjoy.com?utm_campaign=github_repo). You'll need to [purchase a license](https://divjoy.com?utm_campaign=github_repo) to use this code.

## 👉 Get Started
Install dependencies
```
npm install
```

Run the development server
```
npm run dev
```
When the above command completes you'll be able to view your website at `http://localhost:3000`

## 🥞 Stack
This project uses the following libraries and services:
- Framework - [Next.js](https://nextjs.org)
- Styling - [Bulma](https://bulma.io) with custom SASS styles
- Authentication - [Firebase Auth](https://firebase.google.com/products/auth)
- Newsletter - [Mailchimp](https://mailchimp.com) (via server endpoint)
- Contact Form - [Amazon SES](https://aws.amazon.com/ses/) (via server endpoint)
- Analytics - [Google Analytics](https://googleanalytics.com)
- Hosting - [ZEIT Now](https://zeit.co)


## 📚 Guide
<details>
  <summary><b>Styles</b></summary>
  <p>
    You can edit Bulma SASS variables in the global stylesheet located at <code><a href="src/styles.scss">src/styles.scss</a></code>. Variables allow you to control global styles (like colors and fonts), as well as element specific styles (like button padding). Before overriding Bulma elements with custom style check the <a href="https://bulma.io/documentation">Bulma docs</a> to see if you can do what need by tweaking a SASS variable.
  </p>
  <p>
    Custom styles are located in their related component's directory. For example, if any custom style is applied to the Navbar component you'll find it in <code>src/components/Navbar/styles.scss</code>. We ensure custom styles are scoped to their component by prepending the classname with the component name (such as <code>.Navbar__brand</code>). This ensures styles never affect elements in other components. If styles need to be re-used in multiple components consider creating a new component that encapsulates that style and structure and using that component in multiple places.
  </p>
</details>

<details>
  <summary><b>Routing</b></summary>
  <p>
    This project uses the built-in Next.js router and its convenient <code>useRouter</code> hook. Learn more in the <a target="_blank" href="https://github.com/zeit/next.js/#routing">Next.js docs</a>.
  
  ```jsx
  import Link from 'next/link';
import { useRouter } from 'next/router';

  function MyComponent(){
    // Get the router object
    const router = useRouter();

    // Get value from query string (?postId=123) or route param (/:postId)
    console.log(router.query.postId);

    // Get current pathname
    console.log(router.pathname)

    // Navigate with the <Link> component or with router.push()
    return (
      <div>
        <Link href="/about"><a>About</a></Link>
        <button onClick={(e) => router.push('/about')}>About</button>
      </div>
    );
  }
  ```
  </p>
</details>

<details>
  <summary><b>Authentication</b></summary>

  <p>
    This project uses <a href="https://firebase.google.com">Firebase Auth</a> and includes a convenient <code>useAuth</code> hook (located in <code><a href="src/util/auth.js">src/util/auth.js</a></code>) that wraps Firebase and gives you common authentication methods. Depending on your needs you may want to edit this file and expose more Firebase functionality.

  ```js
  import { useAuth } from './../util/auth.js';

  function MyComponent(){
    // Get the auth object in any component
    const auth = useAuth();

    // Depending on auth state show signin or signout button
    // auth.user will either be an object, null when loading, or false if signed out
    return (
      <div>
        {auth.user ? (
          <button onClick={(e) => auth.signout()}>Signout</button>
        ) : (
          <button onClick={(e) => auth.signin('hello@divjoy.com', 'yolo')}>Signin</button>
        )}
      </div>
    );
  }
  ```
  </p>
</details>

<details>
  <summary><b>Deployment</b></summary>
  <p>
  Install the ZEIT Now CLI

```
npm install -g now
```

Then run this command in your project directory to deploy to ZEIT Now

```
now
```

See the <a target="_blank" href="https://zeit.co/docs">ZEIT docs</a> for more details.
  </p>
</details>

<details>
  <summary><b>Other</b></summary>
  <p>
    The <a href="https://github.com/zeit/next.js">Next.js documentation</a> covers many other topics.
    This project was initially created using <a href="https://divjoy.com?ref=readme_other">Divjoy</a>, a React codebase generator. Feel free to ask questions in the <a href="https://spectrum.chat/divjoy">Divjoy forum</a> and we'll do our best to help you out.
  </p>
</details>
