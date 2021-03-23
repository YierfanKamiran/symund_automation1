package com.symund.pages;

import com.symund.utilities.Driver;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;
import java.util.NoSuchElementException;

public class AddRemoveFileFavouritePage extends  BasePage{

    public AddRemoveFileFavouritePage(){
        PageFactory.initElements(Driver.get(), this);
    }

    @FindBy(linkText = "Remove from favourites")
    public WebElement removeFromfavourites;

    public String checkFavoritesPage(String file){


            WebElement addedFile = Driver.get().findElement
                    (By.xpath("//div[@id='app-content-favorites']/table/tbody/tr[@data-file='" + file + "']"));

            String favFileName = addedFile.getAttribute("data-file");

            return  favFileName;

    }

    public void clickThreedotsToRemove(String fileName){
        Driver.get().findElement(By.xpath("(//tr[@data-file='"+fileName+"'])[1]/td[2]/a/span[2]/a[2]")).click();
      //  Driver.get().findElement(By.xpath("/tr[@data-file='"+fileName+"']/td[2]/div/ul/li[3]"));
    }

    public List<WebElement> getFavouriteFiles(){
        List<WebElement> favouriteFiles = Driver.get().findElements(By.xpath("//div[@id='app-content-favorites']/table/tbody/tr"));
        return favouriteFiles;
    }

}
