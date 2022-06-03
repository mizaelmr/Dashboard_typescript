import Layout from "../layout";
import { Route } from "react-router-dom";
interface IRouteParams {
  component: any;
  rest?: any[];
  path?: string;
  exact?: any;
}

export default function RouteWapper({
  component: Component,
  ...rest
}: IRouteParams) {
  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}
