package com.symund.step_definitions;

import com.symund.pages.AddRemoveFileFavouritePage;
import com.symund.utilities.BrowserUtils;
import com.symund.utilities.Driver;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import java.util.List;

public class AddRemoveFileFavouriteStepDefs {

    AddRemoveFileFavouritePage addRemoveFileFavouritePage=new AddRemoveFileFavouritePage();

    @When("the user clicks to {string} next to the {string} name")
    public void the_user_clicks_to_next_to_the_name(String threeDots, String fileName) {

        addRemoveFileFavouritePage.clickThreeDots(fileName);
        BrowserUtils.waitFor(2);
    }

    @When("the user chooses {string}")
    public void the_user_chooses(String favourites) {
        addRemoveFileFavouritePage.addToFavourites.click();
        BrowserUtils.waitFor(2);

    }

    @When("the user clicks to {string} tab")
    public void the_user_clicks_to_tab(String favouritesTab) {

        addRemoveFileFavouritePage.navigateToLeftModule(favouritesTab);
        BrowserUtils.waitFor(1);
    }

    @Then("the {string} should appear in the Favorites page")
    public void the_should_appear_in_the_Favorites_page(String fileName) {

        Assert.assertEquals(fileName, addRemoveFileFavouritePage.checkFavoritesPage(fileName) );
    }


    @When("the user clicks to three dots next to the {string} name to remove")
    public void the_user_clicks_to_three_dots_to_the_name_to_remove(String fileName) {

        addRemoveFileFavouritePage.clickThreedotsToRemove(fileName);
        addRemoveFileFavouritePage.removeFromfavourites.click();
        BrowserUtils.waitFor(2);
    }

    @Then("the {string} should disappear in the Favorites page")
    public void the_should_disappear_in_the_Favorites_page(String file) {
//
//        List<WebElement> favouriteFiles= Driver.get().findElements(By.xpath("//div[@id='app-content-favorites']/table/tbody/tr"));
        Assert.assertTrue(addRemoveFileFavouritePage.getFavouriteFiles().isEmpty());
    }

}
