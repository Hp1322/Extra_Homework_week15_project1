package com.carsguide.pages;

import com.carsguide.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class HomePage extends Utility {

    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    public HomePage() {
        PageFactory.initElements(driver,this);


    }
    @CacheLookup
    @FindBy(xpath = "//a[contains(text(),'buy + sell')]")
    WebElement buySellTab;

    @CacheLookup
    @FindBy(xpath = "//a[contains(text(),'Search Cars')]")
    WebElement searchCarsLink;

    @CacheLookup
    @FindBy(xpath = "//div[@class='uhf-child-menu']//ul//li//a[text()='Used']")
   // @FindBy(xpath = "///header/div[@id='u_H']/div[1]/div[1]/ul[1]/li[1]/div[1]/div[1]/div[1]/ul[1]/li[2]/a[1]")
    WebElement usedCarLink;

    public void mouseHoverOnBuySellTab(){
        mouseHoverToElement(buySellTab);
    }
    public void clickOnSearchCarsLink(){
        clickOnElement(searchCarsLink);
    }
    public void clickOnUsedCarLink(){
       // mouseHoverToElement(usedCarLink);
        clickOnElement(usedCarLink);
    }

}
