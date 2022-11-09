import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 my-6 mx-auto'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Difference between SQL and NoSQL</h2>
                        <h3>SQL</h3>
                        <p>RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS). These databases have fixed or static or predefined schema . These databases are not suited for hierarchical data storage. These databases are best suited for complex queries . Vertically Scalable. Follows ACID property. Examples: MySQL, PostgreSQL, Oracle, MS-SQL Server etc.  </p>
                        <h3>NoSQL</h3>
                        <p>Non-relational or distributed database system. These databases are best suited for hierarchical data storage. These databases are not so good for complex queries. Horizontally scalable . Follows CAP(consistency, availability, partition tolerance). Examples: MongoDB, GraphQL, HBase, Neo4j, Cassandra etc </p>

                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">What is JWT, and how does it work?</h2>
                        <h3>JWT</h3>
                        <p>JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed.</p>
                        <h3>how does it work?</h3>
                        <p>Authentication server verifies the credentials and issues a jwt signed using either a secret salt or a private key. User's Client uses the JWT to access protected resources by passing the JWT in HTTP Authorization header. Resource server then verifies the authenticity of the token using the secret salt/ public key.</p>

                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">What is the difference between javascript and NodeJS?</h2>
                        <h3>What is JavaScript?</h3>
                        <p>JavaScript is an Object-oriented programming language that can be used on the client-side as well as on the server-side and developers not only use it for creating web pages but also it is used for game development and mobile app development. Running on Browsers NodeJS helps us run JS outside the browser as well. It lets us use JS on the server-side as well since it works on the server-side.The Node.JS, on the other hand, isn’t capable enough to add various HTML tags.Inside Node.JS, we have the JS engine known as V8. It helps in parsing and running the JS code. C, C++, and also Javascript are used for writing Node.JS. </p>
                        <h3>What is Node.JS?</h3>
                        <p>It is a programming language. We use JS mainly to write scripts on a website that makes web pages more dynamic in nature.We can only run JS on browsers. It is utilised on the web page’s client-side. The JS can easily add HTML and even play with the DOM. We can run JS in any browser engine, such as the Spidermonkey in the Firefox browser and the JS core in the Safari browser.The Javascript is nothing but the ECMA script’s updated version that makes use of the Chrome V8 engine that is written in the C++ language.  </p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">How does NodeJS handle multiple requests at the same time?</h2>
                        <p>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. <br />As is, node. js can process upwards of 1000 requests per second and speed limited only to the speed of your network card. Note that it's 1000 requests per second not clients connected simultaneously. It can handle the 10000 simultaneous clients without issue. <br />Node js uses an event loop to maintain concurrency and perform non-blocking I/O operations. As soon as Node js starts, it initializes an event loop. The event loop works on a queue (which is called an event queue) and performs tasks in FIFO(First In First Out) order.</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;