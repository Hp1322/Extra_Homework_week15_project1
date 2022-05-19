package com.carsguide.pages;

import com.carsguide.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class BuyCarPage extends Utility {

    private static final Logger log = LogManager.getLogger(BuyCarPage.class.getName());

    public BuyCarPage() {
        PageFactory.initElements(driver, this);


    }

    @CacheLookup
    @FindBy(xpath = "//h1[text()='New & Used Car Search - carsguide']")
    WebElement newAndUsedCarText;

    @CacheLookup
    @FindBy(xpath = "//h1[contains(text(),'Used Cars For Sale')]")
    WebElement usedCarText;

    @CacheLookup
    @FindBy(xpath = "//select[@id='makes']")
    WebElement makeDropDown;

    @CacheLookup
    @FindBy(xpath = "//select[@id='models']")
    WebElement modelDropDown;

    @CacheLookup
    @FindBy(xpath = "//select[@id='locations']")
    WebElement locationDropDown;

    @CacheLookup
    @FindBy(xpath = "//select[@id='priceTo']")
    WebElement priceDropDown;

    @CacheLookup
    @FindBy(xpath = "//input[@id='search-submit']")
    WebElement findMyNextCarButton;

    public String getNewAndUsedCarText(){
        return getTextFromElement(newAndUsedCarText);

    }
    public String getUsedCarText(){
        return getTextFromElement(usedCarText);
    }

    public void selectMake(String make) {
        selectByVisibleTextFromDropDown(makeDropDown, make);
    }

    public void selectModel(String model) {
        selectByValueFromDropDown(modelDropDown, model);
    }

    public void selectLocation(String location) {
        selectByVisibleTextFromDropDown(locationDropDown, location);
    }

    public void selectPrice(String price) {
        selectByVisibleTextFromDropDown(priceDropDown, price);
    }


    public void clickOnFindMyNextCarButton() {
        clickOnElement(findMyNextCarButton);
    }
}
