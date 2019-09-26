import dva from 'dva';
import './index.css';
import "antd/dist/antd.css";
import "./assets/styles/main.scss";
import createLoading from "dva-loading";
// 1. Initialize
const app = dva();

// 2. Plugins
app.use(createLoading({ effects: true }));

// 3. Model
// app.model(require('./models/example').default);
app.model(require("./models/posts").default);
// 4. Router
app.router(require('./routes/router').default);

// 5. Start
app.start('#root');
