package com.symund.step_definitions;

import com.symund.pages.BasePage;
import com.symund.pages.NavigateHomePage;
import io.cucumber.java.en.When;

public class NavigateHomePage_StepDefs {

    NavigateHomePage navigateHomePage = new NavigateHomePage();

    @When("the user clicks {string}")
    public void the_user_clicks(String option) {

        navigateHomePage.navigateTo(option);
    }

    @When("the user clicks to Symund logo")
    public void the_user_clicks_to_Symund_logo() {

        navigateHomePage.companyLogo.click();

    }
}
