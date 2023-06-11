# Tracepath Application Client & Server

**Note:** Pangea's APIs are **not used in this repository**, as this repository only contains the application client and server. Please visit the [diagnostics server](https://github.com/n00bgineer/tracepath-diagonostics) repository to explore the usage of Pangea's APIs for development of Tracepath.

![Tracepath](https://res.cloudinary.com/dgu9rv3om/image/upload/v1685827597/demo-dark_t2rsk2.png)

**Tracepath** is an open-source application for performance and security monitoring. Currently, for any given web application's URL (e.g., pangea.cloud), it generates a report consisting of two parts:

1. **Performance analysis**, which contains the web application's performance report generated against one of Tracepath's diagnostic servers (refer to the `tracepath-diagnostics` repository for details). These servers run on a cloud instance deployed at a specific location (e.g., Mumbai, Stockholm). The performance analysis is conducted using Google's `lighthouse` tool running on a headless chrome browser. However, unlike a typical Lighthouse report, Tracepath presents the performance metrics in a jargon-free form that can be easily understood by non-technical stakeholders of a project.

2. **Security tracerouting**, a unique feature offered by Tracepath, helps visualize the routing path of packets along with their geographic location and IP reputation score to identify malicious IP addresses through which the IP packets might be passing. It combines tracerouting, IP geolocation, and IP threat/reputation intelligence.

## Setup

**Repos**

Tracepath consists of three parts:
1. **Client**, which is a react client that allows users to generate and retrieve performance and security reports, authenticate users, amongst other things.
2. **Application Server**, which is the server that handles client requests for storing and accessing data, amongst other things, including communicating with the diagonostics server and replaying the information back to client.
3. **Diagonostics Server**, which is the server that generates performance and security reports.

This repository **only contains code for the client and the application server**. To access the code for the diagonostics server, checkout the `tracepath-diagonostics` server.

**Prerequisites**

Tracepath's client and application server is a Redwood.js application and follows the typical Redwood structure and setup requirements:

```
Redwood requires Node.js (>=18.x) and Yarn (>=1.15)
```

Start by installing dependencies:

```

yarn install
```

Then change into that directory and start the development server:

```
git clone https://github.com/n00bgineer/tracepath.git ./tracepath-main
cd tracepath-main
yarn install
yarn redwood dev
```

To successfully run the development server, you'll need some additional information:

1. You'll need an environment variable file (i.e. `.env`) with the PostgreSQL connection string which is stored in a key called `DATABASE_URL`:
```
DATABASE_URL=postgresql://db_name:db_password@db_url:db_port
```
2. You'll also need keys from Firebase for authentication. Just search for the key `apiKey` and replace the following variables:
```
{
  apiKey: 'AIzaSyA3aHw_Ci2dk0XvKiyEHhXe9xINzForu7g',
  authDomain: 'tracepath-dev.firebaseapp.com',
  projectId: 'tracepath-dev',
}
```

That's all you need to setup the development server, but there's more, you'll also need to setup the diagonostics server. Head over to `tracepath-diagonostics` repo for more info.
