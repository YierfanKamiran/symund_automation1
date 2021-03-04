package com.symund.pages;

import com.symund.utilities.Driver;
import org.openqa.selenium.support.PageFactory;

public class RecentUploadedFilesPage extends BasePage {
    public RecentUploadedFilesPage (){ PageFactory.initElements(Driver.get(), this);

    }
}
