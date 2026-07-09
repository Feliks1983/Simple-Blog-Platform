import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import NewPost from "../pages/NewPost";
import Setting from "../pages/setting/Setting";
import NotFound from "../notfound/NotFound";
import Article from "../pages/article/Article";
import Profile from "../pages/profile/Profile";
import SignIn from "../pages/signin/SignIn";
import SignUp from "../pages/signup/SignUp";
import EditArticle from "../pages/EditArticle";
import ErrorBoundary from "../notfound/ErrorBoundary";
import { ProtectedRoute } from "../component/protected-route/ProtectedRoute";

export default function Router() {
  return (
    <ErrorBoundary>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles/:slug" element={<Article />} />
        <Route
          path="/new-post"
          element={
            <ProtectedRoute>
              <NewPost />
            </ProtectedRoute>
          }
        />
        <Route
          path="/articles/:slug/edit"
          element={
            <ProtectedRoute>
              <EditArticle />
            </ProtectedRoute>
          }
        />
        <Route path="/setting" element={<Setting />} />
        <Route path="/profile/:username" element={<Profile />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ErrorBoundary>
  );
}
