import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { RecipesScreen } from "../components/recipes/RecipesScreen";
import { SearchRecipe } from "../components/recipes/SearchRecipe";

export const PrivateAuthRouter = () => {
  return (
    <div>
      <div>
        <Switch>
          <Route exact path="/" component={RecipesScreen} />
          <Route exact path="/search-recipe" component={SearchRecipe} />

          <Redirect to="/" />
        </Switch>
      </div>
    </div>
  );
};
