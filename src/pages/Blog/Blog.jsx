import React from "react";
import { Helmet } from "react-helmet";
import { FaAngleDown } from "react-icons/fa";

const Blog = () => {
  return (
    <div className="min-h-[65vh] w-11/12 md:w-10/12 mx-auto  mt-10">
      <h2 className="text-3xl mb-5 text-center">Blog</h2>
      {/* Question 1 */}
      <div
        tabIndex={0}
        className="lg:w-1/2 mx-auto collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          1. What are the differences between SQL and NoSQL?
        </div>
        <div className="collapse-content text-justify">
          <h4 className="text-xl font-semibold">SQL</h4>
          <p className="mb-3">
            An SQL database—also known as a relational database—and named for
            the programming language it’s written in, Structured Query Language
            (SQL). It’s the more rigid, structured way of storing data.
          </p>{" "}
          <h4 className="text-xl font-semibold">NoSQL</h4>
          <p className="mb-3">
            NoSQL databases--also known as “non SQL” or “not only SQL,” store
            data in a format other than relational tables. Instead of tables,
            NoSQL databases are document-oriented. They’re more like file
            folders, assembling related information of all types but not
            necessarily categorizing the data.
          </p>{" "}
          <h4 className="text-xl font-semibold">Data Structure/Models</h4>
          <p>
            SQL or relational models work better with structured data. This is
            because structured data is easy to search and analyze, much like
            data that is laid out in a table with columns and rows. NoSQL models
            make sense for less structured data sets because it doesn’t rely on
            a predefined model to analyze the data.
          </p>
          <h4 className="text-xl font-semibold">Scaling</h4>
          <p>
            Most SQL databases are vertically scalable, meaning that you add
            more RAM or CPU to your existing single server to increase storage
            space. NoSQL databases are horizontally scalable, meaning that you
            simply add more servers to your database to get more storage space.
            Because of the ability to add additional servers, NoSQL databases
            offer a much more distributed database.
          </p>
          <h4 className="text-xl font-semibold">Query </h4>
          <p>
            Most SQL databases are vertically scalable, meaning that you add
            more RAM or CPU to your existing single server to increase storage
            space. NoSQL databases are horizontally scalable, meaning that you
            simply add more servers to your database to get more storage space.
            Because of the ability to add additional servers, NoSQL databases
            offer a much more distributed database. On the other hand, NoSQL
            systems are a bit more complex when it comes to running queries.
            Because there is no set query language, your team will likely need
            to work with a developer or someone a bit more knowledgeable in
            information technology to pull data queries.
          </p>
        </div>
      </div>

      {/* Question 2 */}
      <div
        tabIndex={0}
        className="lg:w-1/2 mx-auto collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          2. What is JWT, and how does it work?
        </div>
        <div className="collapse-content text-justify">
          <p className="mb-3">
            JSON Web Token (JWT) is an open standard for securely transmitting
            information between parties as JSON object.
          </p>{" "}
          <p className="mb-3">
            A JSON Web Token consists of 3 parts separated by a period. <br />
            <code className="block px-3 py-2 bg-blue-50 rounded my-2">
              header.payload.signature
            </code>
          </p>
          <p className="mb-3">In a nutshell, JWT works like this:</p>
          <ol className="list-decimal ml-3">
            <li className="mb-2">
              The user/client app sends a sign in request. In other words, here
              is where your username/password (or any other type of sign in
              credentials you need to provide) will travel.
            </li>
            <li className="mb-2">
              Once verified, the API will create a JSON Web Token (more on this
              in a bit) and sign it using a secret key.
            </li>
            <li className="mb-2">
              Then the API will return that token back to the client
              application.
            </li>
            <li className="mb-2">
              Finally, the client app will receive the token, verify it on its
              own side to make sure it’s authentic and then proceed to use it on
              every subsequent request to authenticate the user without having
              to send their credentials anymore
            </li>
          </ol>
        </div>
      </div>

      {/* Question 3 */}
      <div
        tabIndex={0}
        className="lg:w-1/2 mx-auto collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          3. What are the differences between JavaScript and NodeJS?
        </div>
        <div className="collapse-content text-justify">
          <p className="mb-3">
            JavaScript is a high-level programming language that makes our web
            pages and web applications dynamic and interactive by giving them
            the ability to think and act. JavaScript is a lightweight (easy to
            learn syntax) and object-oriented programming language whereas
            Node.js is a runtime environment built on google v8 engine and
            typically used to represent a list of objects and functions that
            JavaScript programs can access.
          </p>
          <p className="mb-3">
            JavaScript is a proper high-level programming language used to
            create web scripts whereas Node.js is a run time environment built
            on google’s v8 engine.
          </p>
          <p className="mb-3">
            JavaScript is executed in the browser whereas using Node.js gives us
            the ability to execute JavaScript outside the browser.
          </p>
          <p className="mb-3">
            JavaScript can manipulate DOM or add HTML within whereas Node.js
            doesn’t have the capability to add HTML.s
          </p>
          <p className="mb-3">
            JavaScript is a proper high-level programming language used to
            create web scripts whereas Node.js is a run time environment built o
          </p>
        </div>
      </div>

      {/* Question 4 */}
      <div
        tabIndex={0}
        className="lg:w-1/2 mx-auto collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          4. How does NodeJS handle multiple requests at the same time?
        </div>
        <div className="collapse-content text-justify">
          <p className="mb-3">Node.js uses two concepts:</p>
          <ul className="list-disc ml-5 mb-3">
            <li>Non-blocking</li>
            <li>Asynchronous</li>
          </ul>
          <p className="mb-3">
            Whenever a client sends a request the single thread will send that
            request to someone else. The current thread will not be busy working
            with that request. There are workers working for the server. The
            server sends the request to the worker, the worker further sends it
            to the other server and waits for the response. In the meantime if
            there is another request the thread will send it to another worker
            and the worker will wait for the response from the another server.
          </p>
          <p>
            In this way the single thread will always be available to take the
            requests from the client. It will not block the requests.
          </p>
        </div>
      </div>
      <Helmet>
        <title>Blog | Elizabeth Mcconnell | Plastic Surgeon</title>
      </Helmet>
    </div>
  );
};

export default Blog;
