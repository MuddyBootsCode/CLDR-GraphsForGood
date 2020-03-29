import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import MainPageTabs from "./Components/MainPageTabs";
import AddMemberForm from "./Components/AddMemberForm";

const Routes = () => {
    return (
        <Router>
                <Switch>
                    <Route
                        path="/"
                         exact
                         component={MainPageTabs}
                    />
                    <Route
                        path="/addMember"
                        exact
                        component={AddMemberForm}
                    />
                </Switch>
        </Router>
    );
};

// function Home() {
//     return <MainPageTabs />;
// }
//
// function AddMember() {
//    return <AddMemberForm />
// }

export default Routes;
