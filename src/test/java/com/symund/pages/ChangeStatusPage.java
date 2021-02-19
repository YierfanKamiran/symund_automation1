package com.symund.pages;

import com.symund.utilities.Driver;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class ChangeStatusPage extends BasePage{

    public ChangeStatusPage (){
        PageFactory.initElements(Driver.get(), this);
    }

}
