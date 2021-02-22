package com.symund.step_definitions;

import com.symund.pages.ChangeStatusPage;
import com.symund.utilities.BrowserUtils;
import com.symund.utilities.Driver;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;

import java.util.List;

public class ChangeStatusStepDefs {
    ChangeStatusPage changeStatusPage = new ChangeStatusPage();

    @When("the user clicks to {string} option from Settings Menu")
    public void the_user_clicks_to_option_from_Settings_Menu(String string) {
        changeStatusPage.settingsMenu.click();
        changeStatusPage.userStatus.click();
    }

    @Then("the user should see following status messages")
    public void the_user_should_see_following_status_messages(List<String> options) {

        changeStatusPage.validateAllOptions(changeStatusPage.statusMessages);
    }

    @When("the user clicks to {string} status message")
    public void the_user_clicks_to_status_message(String string) {
        for (WebElement status : changeStatusPage.statusMessages) {
            if (status.getText().contains(string))
                status.click();
            BrowserUtils.waitForPageToLoad(3);
        }
    }

    @When("the user clicks clear after button")
    public void the_user_clicks_clear_after_button() {
        changeStatusPage.clearAfterTime.click();
        BrowserUtils.waitFor(1);
    }

    @Then("the user should be able to see following")
    public void the_user_should_be_able_to_see_following(List<String> timeDeadlines) {

        changeStatusPage.validateAllOptions(changeStatusPage.predifenedTimes);
    }

    @Then("the user clicks to {string} option")
    public void the_user_clicks_to_option(String string) {
        for (WebElement timeDeadline : changeStatusPage.predifenedTimes) {
            if (timeDeadline.getText().equals(string))
                timeDeadline.click();
            return;
        }
    }

    @When("the user clicks to {string} button")
    public void the_user_clicks_to_button(String string) {

        JavascriptExecutor jse = (JavascriptExecutor) Driver.get();
        jse.executeScript("window.scrollBy(0,1000)");

        if (string.equals("Set status message")) {
            changeStatusPage.setStatusButton.click();
            BrowserUtils.waitFor(2);
        } else {
            JavascriptExecutor executor = (JavascriptExecutor) Driver.get();
            executor.executeScript("arguments[0].click();", changeStatusPage.clearStatusButton);
            changeStatusPage.clearStatusButton.click();
            BrowserUtils.waitFor(2);
        }
    }

    @When("{string} status message should be displayed in Settings Menu")
    public void status_message_should_be_displayed_in_Settings_Menu(String expectedStatus) {
        changeStatusPage.ValidateStatusMessageDisplayed(expectedStatus);
    }

    @When("the user clicks to emoji icon and chooses emoji {string}")
    public void the_user_clicks_to_emoji_icon_and_chooses_emoji(String string) {
        changeStatusPage.emojiBox.click();
        changeStatusPage.getEmoji(string);
    }

    @When("the user enters {string} into the status message input box")
    public void the_user_enter_into_the_status_message_input_box(String string) {

        changeStatusPage.statusMessageInputBox.clear();
        BrowserUtils.waitFor(1);
        changeStatusPage.statusMessageInputBox.sendKeys(string);
    }


}
