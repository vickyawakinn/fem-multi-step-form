import { Routes, Route } from "react-router-dom";

import { Navigation } from "./components/Navigation";
import { Panel } from "./components/Panel";
import { PersonalInfo } from "./components/primaryComponents/PersonalInfo";
import { AddOns } from "./components/primaryComponents/AddOns";
import { SelectPlan } from "./components/primaryComponents/SelectPlan";
import { Summary } from "./components/primaryComponents/Summary";
import { ThankYou } from "./components/ThankYou";

function App() {
    return (
        <div className="App">
            <Navigation />
            <Routes>
                <Route path="/" element={<Panel />}>
                    <Route index element={<PersonalInfo />}></Route>
                    <Route path="/selectPlan" element={<SelectPlan />} />
                    <Route path="/addOns" element={<AddOns />} />
                    <Route path="/summary" element={<Summary />} />
                </Route>
                <Route path="/thankYou" element={<ThankYou />} />
            </Routes>
        </div>
    );
}

export default App;
