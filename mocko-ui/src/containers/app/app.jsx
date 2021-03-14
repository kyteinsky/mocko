import React, {useEffect} from 'react';
import {AppView, Logo} from "./styles";
import {Navbar} from "../../components/navbar/navbar";
import {MockList} from "../mock-list/mock-list";
import {Mocks, useMocks} from "../../contexts/mock";
import {BrowserRouter} from "react-router-dom";
import {MockCrudCtx} from "../mock-crud-ctx/mock-crud-ctx";
import { AppDrawer } from './drawer';

export function App() {
    const mocks = useMocks();

    useEffect(() => {
        document.querySelector(".loader").classList.add("loader_hidden");
        setTimeout(() => document.body.removeChild(document.querySelector(".loader")), 200);
    }, []);

    return (
        <Mocks.Provider value={mocks}>
            <BrowserRouter>
                <Navbar>
                    <Logo src="http://cdn.codetunnel.net/mocko/logo-white.svg" alt="Mocko Logo"/>
                    Mocko
                </Navbar>
                <AppDrawer/>
                <AppView>
                    <MockList/>
                </AppView>

                <MockCrudCtx/>
            </BrowserRouter>
        </Mocks.Provider>
    );
}
