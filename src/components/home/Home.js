import React, { Suspense } from "react";

const Feed = React.lazy(() => import("./feed/form/Feed"));
const WidgetBar = React.lazy(() => import("./sidebar/WidgetBar"));
const Sidebar = React.lazy(() => import("./sidebar/SideBar"));

function Home() {
  return (
    <div className="bgh">
      <div className="app__body">
        <Suspense fallback={null}>
          <Sidebar />
        </Suspense>
        <Suspense fallback={null}>
          <Feed />
        </Suspense>
        <Suspense fallback={null}>
          <WidgetBar />
        </Suspense>
      </div>
    </div>
  );
}

export default Home;
