import { Routes } from "@angular/router";
import { SignUpComponent } from "./signup.component/signup.component";
import { SignInComponent } from "./signin.component/signin.component";
import { LogOutComponent } from "./logout.component/logout.component";

export const authRoutes: Routes = [
  { path: "", redirectTo: "signup", pathMatch: "full" },
  { path: "signup", component: SignUpComponent },
  { path: "signin", component: SignInComponent },
  { path: "logout", component: LogOutComponent }
];
