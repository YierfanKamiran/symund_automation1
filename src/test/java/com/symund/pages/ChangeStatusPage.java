package com.symund.pages;

import com.symund.utilities.BrowserUtils;
import com.symund.utilities.Driver;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class ChangeStatusPage extends BasePage{

    public ChangeStatusPage (){
        PageFactory.initElements(Driver.get(), this);
    }

    @FindBy(css = "div.predefined-status")
    public List<WebElement> statusMessages;

    @FindBy(xpath = "//div[@class='status-buttons']/button[2]")
    public WebElement setStatusButton;

    @FindBy(xpath = "//div[@class='status-buttons']/button[1]")
    public WebElement clearStatusButton;

    @FindBy(css = "form.custom-input__form>input")
    public WebElement statusMessageInputBox;

    @FindBy(xpath = "//span[@class='multiselect__single']")
    public WebElement clearAfterTime;

    @FindBy(css = "span.multiselect__single")
    public WebElement timeForClear;

    @FindBy(className = "multiselect__element")
    public List<WebElement>predifenedTimes;

    @FindBy(css = "button.custom-input__emoji-button")
    public WebElement emojiBox;

    @FindBy(css = "a.user-status-menu-item__toggle")
    public WebElement userStatus;


    public void getEmoji(String string){
        WebElement emoji = Driver.get().findElement(By.xpath("//span[@data-title='"+string+"']/span"));
        JavascriptExecutor executor = (JavascriptExecutor) Driver.get();
        executor.executeScript("arguments[0].click();", emoji);

    }
    public void ValidateStatusMessageDisplayed(String expectedStatus){
        settingsMenu.click();
        BrowserUtils.waitFor(2);
        for (WebElement settingsMenuOption : settingsMenuOptions) {
            if (settingsMenuOption.getText().equals(expectedStatus))
                Assert.assertTrue(settingsMenuOption.isDisplayed());
        }
    }

    public void validateAllOptions(List<WebElement>options){
        for (WebElement option : options) {
            Assert.assertTrue(option.isDisplayed());
        }
    }
}
