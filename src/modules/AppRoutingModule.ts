import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router"; // CLI imports router
import { HelloRoute } from "../components/HelloRoute";
import { Start } from "../components/Start";
import { DetailComponent } from "../components/detail/detail.component";

const routes: Routes = [
  { path: "", component: Start },
  // { path: "", component: HelloRoute },
  { path: "hello-route/:title", component: HelloRoute },
  { path: "movies/:id", component: DetailComponent }
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
