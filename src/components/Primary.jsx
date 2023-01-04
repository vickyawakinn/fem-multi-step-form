import { Routes, Route, Outlet } from "react-router-dom";

export function Primary() {
    return (
        <div className="primary container">
            <Outlet />
        </div>
    );
}
