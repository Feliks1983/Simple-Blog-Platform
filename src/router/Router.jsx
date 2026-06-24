import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import NewPost from "../pages/NewPost";
import Setting from "../setting/Setting";
import NotFound from "../notfound/NotFound";
import Article from "../pages/article/Article";
import Profile from "../pages/profile/Profile";
import SignIn from "../pages/signin/SignIn";
import SignUp from "../pages/signup/SignUp";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/articles" element={<Home />} />
      <Route path="/articles/:slug" element={<Article />} />
      <Route path="/new-post" element={<NewPost />} />
      <Route path="/setting" element={<Setting />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
