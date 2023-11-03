import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ProcessList } from "./process/ProcessList";
import { ProcessCreate } from "./process/ProcessCreate";
import { ProcessEdit } from "./process/ProcessEdit";
import { ProcessShow } from "./process/ProcessShow";
import { MachineList } from "./machine/MachineList";
import { MachineCreate } from "./machine/MachineCreate";
import { MachineEdit } from "./machine/MachineEdit";
import { MachineShow } from "./machine/MachineShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Production Service"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Process"
          list={ProcessList}
          edit={ProcessEdit}
          create={ProcessCreate}
          show={ProcessShow}
        />
        <Resource
          name="Machine"
          list={MachineList}
          edit={MachineEdit}
          create={MachineCreate}
          show={MachineShow}
        />
      </Admin>
    </div>
  );
};

export default App;
