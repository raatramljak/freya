import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import MainLayout from "./layouts/MainLayout";

const Home = lazy(() => import("./pages/Home"));
const Tareas = lazy(() => import("./pages/Tasks"));
const Portafolios = lazy(() => import("./pages/Briefcases"));
const Portafolio = lazy(() => import("./pages/Briefcase"));
const Proyectos = lazy(() => import("./pages/Projects"));
const Docs = lazy(() => import("./pages/Docs"));
const Doc = lazy(() => import("./pages/Doc"));


function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: '@docs/GET_DOCS' });
  })

  return (
    <Router>
        <MainLayout>
          <Suspense fallback={<div></div>}>
            <Route exact path="/" component={Home} />
            <Route path="/tasks" component={Tareas} />
            <Route path="/briefcases" component={Portafolios} />
            <Route path="/briefcase/:id" component={Portafolio} />
            <Route path="/projects" component={Proyectos} />
            <Route path="/docs" component={Docs} />
            <Route path="/doc/:id" component={Doc} />
          </Suspense>
        </MainLayout>
    </Router>
  );
}

export default App;
