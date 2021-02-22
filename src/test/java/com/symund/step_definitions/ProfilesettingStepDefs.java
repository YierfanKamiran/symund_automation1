package com.symund.step_definitions;

import com.symund.pages.DashboardPage;
import com.symund.pages.ProfilesettingPage;
import com.symund.utilities.BrowserUtils;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
public class ProfilesettingStepDefs {

    ProfilesettingPage profilesettingPage = new ProfilesettingPage();

    @Given("the user navigates avatar")
    public void the_user_navigates_avatar() {
        // Write code here that turns the phrase above into concrete actions
        throw new io.cucumber.java.PendingException();
    }

    @Given("the user clicks Setting button")
    public void the_user_clicks_Setting_button() {
        // Write code here that turns the phrase above into concrete actions
        throw new io.cucumber.java.PendingException();
    }

    @When("the user enters information below")
    public void the_user_enters_information_below(io.cucumber.datatable.DataTable dataTable) {
        // Write code here that turns the phrase above into concrete actions
        // For automatic transformation, change DataTable to one of
        // E, List<E>, List<List<E>>, List<Map<K,V>>, Map<K,V> or
        // Map<K, List<V>>. E,K,V must be a String, Integer, Float,
        // Double, Byte, Short, Long, BigInteger or BigDecimal.
        //
        // For other transformations you can register a DataTableType.
        throw new io.cucumber.java.PendingException();
    }

    @Then("the user see the newly entered changes")
    public void the_user_see_the_newly_entered_changes() {
        // Write code here that turns the phrase above into concrete actions
        throw new io.cucumber.java.PendingException();
    }



}