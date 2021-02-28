package com.symund.pages;

import com.symund.utilities.BrowserUtils;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class UploadFilesPage extends BasePage {
    public UploadFilesPage() {

    }
        @FindBy(xpath = "//span[.='file']")
        public WebElement fileName;
}