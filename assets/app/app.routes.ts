import { Routes, RouterModule } from "@angular/router";
import { MessagesComponent } from "./messages/messages.component/messages.component";
import { AuthComponent } from "./auth/auth.component/auth.component";
import { authRoutes } from "./auth/auth.routes";

const routes: Routes = [
  { path: "", redirectTo: "/messages", pathMatch: "full" },
  { path: "messages", component: MessagesComponent },
  { path: "auth", component: AuthComponent, children: authRoutes }
];

export const router = RouterModule.forRoot(routes);
