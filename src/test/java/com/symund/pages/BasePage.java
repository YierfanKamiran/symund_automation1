package com.symund.pages;

import com.symund.utilities.BrowserUtils;
import com.symund.utilities.Driver;
import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.List;

public class BasePage {


    public BasePage() {
        PageFactory.initElements(Driver.get(), this);
    }

    @FindBy(id = "nextcloud")
    public WebElement companyLogo;

    @FindBy(css = "#appmenu>li")
    public List<WebElement> menuOptions;

    @FindBy(linkText = "Files")
    public WebElement allFilesTab;

    @FindBy(css = "#settings>div>div")
    public WebElement settingsMenu;

    @FindBy(css = "#expanddiv>ul>li")
    public List<WebElement> settingsMenuOptions;

    @FindBy(id = "app-navigation-toggle")
    public WebElement navigationMenu;

    @FindBy(tagName = "title")
    public WebElement pageSubTitle;

    @FindBy(linkText = "Set status")
    public WebElement setStatus;

    @FindBy(xpath = "(//*[@class='fileactions'])[1]/a[1]")
    public WebElement shareIcon;

    @FindBy(xpath = "(//*[@class='fileactions'])[1]/a[2]")
    public WebElement threeDotsMenu;

    @FindBy(linkText = "Add to favourites")
    public WebElement addToFavourites;

    @FindBy(linkText = "Details")
    public WebElement details;

    @FindBy(linkText = "Rename")
    public WebElement rename;

    @FindBy(linkText = "Move or copy")
    public WebElement moveOrCopy;

    @FindBy(linkText = "Download")
    public WebElement download;

    @FindBy(linkText = "Delete folder")
    public WebElement deleteFolder;

    @FindBy(css = "[id='app-navigation']>ul>li>a")
    public List<WebElement> leftNavigationMenuOptions;


/**
 * This method will navigate to All files, Recent, Favourites, Shares, Tags, deleted files modules
 * @param moduleOption
 */
public void navigateToLeftModule(String moduleOption){

    for (WebElement navigationOption : leftNavigationMenuOptions) {
        if(moduleOption.equals(navigationOption.getText()))
            navigationOption.click();
    }
}

/**
 * This method will click to "Share" or "Three dots-menu" next to file name
 */
     public void clickShareOrThreeDots(String option){
         if(option.equalsIgnoreCase("Share icon")|| option.equalsIgnoreCase("Shared")){
             shareIcon.click();
         }else if(option.equalsIgnoreCase("Three dots")){
             threeDotsMenu.click();
         }
     }

    /**
     * This method will navigate user to the specific tab
     *
     * @param tab
     */
    public void navigateTo(String tab) {

        for (WebElement menuOption : menuOptions) {
            if (tab.toUpperCase().equals(menuOption.getText().toUpperCase()))
                menuOption.click();
            return;
        }
    }

    /**
     * @return page name, for example: Contacts - Symund - QA
     */
    public String getPageSubtitle() {

        return pageSubTitle.getText();
    }

    /**
     * This method will navigate user to the specific menu option inside Settings option
     *
     * @param option
     */
    public void getSettingsMenuOption(String option) {
        for (WebElement settingsMenuOption : settingsMenuOptions) {
            if (option.equals(settingsMenuOption.getText()))
                settingsMenuOption.click();

        }
    }

    public void navigateToModule(String module) {
        String tabLocator = "//span[@class='icon icon-add']";
        String moduleLocator = "//span[.='" + module + "']";
        if (module.equals("Upload file")){
            BrowserUtils.waitForClickablility(By.xpath(tabLocator), 5);
            WebElement tabElement = Driver.get().findElement(By.xpath(tabLocator));
            tabElement.click();
            Driver.get().findElement(By.id("file_upload_start")).sendKeys("C:\\Users\\Irfan\\Desktop\\file.txt");
        }else {
            BrowserUtils.waitForClickablility(By.xpath(tabLocator), 5);
            WebElement tabElement = Driver.get().findElement(By.xpath(tabLocator));
            tabElement.click();
                    BrowserUtils.waitForPresenceOfElement(By.xpath(moduleLocator), 5);
                    BrowserUtils.waitForVisibility(By.xpath(moduleLocator), 5);
                    BrowserUtils.scrollToElement(Driver.get().findElement(By.xpath(moduleLocator)));
                    Driver.get().findElement(By.xpath(moduleLocator)).click();
                    Driver.get().findElement(By.xpath("//input[@class='icon-confirm']")).click();
            }
        }
    }


