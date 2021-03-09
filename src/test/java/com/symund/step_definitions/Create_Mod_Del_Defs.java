package com.symund.step_definitions;

import com.symund.pages.ContactPage;
import com.symund.utilities.BrowserUtils;
import com.symund.utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.JavascriptExecutor;

import java.util.Map;

public class Create_Mod_Del_Defs {
    ContactPage contactPage = new ContactPage();

    @Given("the user is on Contact Tab")
    public void the_user_is_on_Contact_Tab() {
       BrowserUtils.waitFor(3);
        JavascriptExecutor jse = (JavascriptExecutor) Driver.get();
        jse.executeScript("arguments[0].click()", contactPage.contactButton);
        //contactPage.contactButton.click();
    }

    @When("the user clicks on New contact button")
    public void the_user_clicks_on_New_contact_button() {
        BrowserUtils.waitFor(3);
        contactPage.newContactButton.click();

    }
    @When("the user provides the required information")
    public void the_user_provides_the_required_information(Map<String,String> userInfo) {
        BrowserUtils.waitFor(3);
        System.out.println(userInfo);
        contactPage.name.clear();
        contactPage.name.sendKeys(userInfo.get("Name"));
        contactPage.company.sendKeys(userInfo.get("Company"));
        contactPage.title.sendKeys(userInfo.get("Title"));
        contactPage.phone.sendKeys(userInfo.get("Phone"));
        contactPage.email.sendKeys(userInfo.get("Email"));
        contactPage.address.sendKeys(userInfo.get("Address"));
        contactPage.postCode.sendKeys(userInfo.get("Postal Code"));
        contactPage.city.sendKeys(userInfo.get("City"));
    }
    @Then("verify that a new contact is created")
    public void verify_that_a_new_contact_is_created(Map<String,String> userInfo) {
        BrowserUtils.waitFor(1);

        String expectedName="Nejla Turk";
    String actualName= userInfo.get("Name");
    String expectedPhone="07428579933";
   String actualPhone= userInfo.get("Phone");
        Assert.assertEquals(expectedName,actualName);
        Assert.assertEquals(expectedPhone,actualPhone);
        System.out.println("expectedName = " + expectedName);
        System.out.println("actualName = " + actualName);
    }

    @When("the user clicks on Name")
    public void the_user_clicks_on_Name() {
        BrowserUtils.waitFor(1);
        contactPage.name.click();

    }
    @When("the user writes a new Name")
    public void the_user_writes_a_new_Name() {
        BrowserUtils.waitFor(3);

        JavascriptExecutor jse = (JavascriptExecutor)Driver.get();
        jse.executeScript("arguments[0].value='Mesut Turk';", contactPage.deletedName);

    }
    @Then("verify that Name is modified")
    public void verify_that_Name_is_modified(Map<String,String> userInfo) {
        BrowserUtils.waitFor(1);
        String expectedName="Mesut Turk";
        String actualName= userInfo.get("Name");
        Assert.assertEquals(expectedName,actualName);
        System.out.println("expectedNameMod = " + expectedName);

    }

    @When("the user clicks on existing Contact")
    public void the_user_clicks_on_existing_Contact() {

        BrowserUtils.waitFor(2);
        contactPage.existingContact.click();

    }
    @When("user clicks the three dots icon from top-right")
    public void user_clicks_the_three_dots_icon_from_top_right() {
        BrowserUtils.waitFor(2);
        contactPage.threeDots.click();
        BrowserUtils.waitFor(2);
    }
    @When("user clicks delete")
    public void user_clicks_delete() {
        BrowserUtils.waitFor(6);
        contactPage.deleted.click();
        BrowserUtils.waitFor(2);
    }
    @Then("the contact will no longer be visible in the Contacts Tab")
    public void the_contact_will_no_longer_be_visible_in_the_Contacts_Tab() {
        Assert.assertFalse("Deleted Succesfully", Driver.get().getPageSource().contains("Kedi Turk"));


    }

    @When("user click on new or existing contact")
    public void user_click_on_new_existing_contact() {

    }
    @When("user click on the Groups combobox")
    public void user_click_on_the_Groups_combobox() {

    }
    @When("user select groups from the lists")
    public void user_select_groups_from_the_lists() {

    }
    @Then("verify that added the group from the contact details")
    public void verify_that_added_the_group_from_the_contact_details() {

    }


}
