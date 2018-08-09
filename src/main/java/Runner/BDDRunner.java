package Runner;


import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = {"C:/My Development/FreshBDDProject/src/test/Features/feature"},
        glue = {"stepDefinition"},//create connection with feature
                                 // file and step difinition file
        format = {"pretty","html:test-output"},//format generate result
                                              // in pretty format for look good
        monochrome = true,
        dryRun = false,
        //dry Run make sure all the step wrote
                       // in feature file that also describe
                      //in step definition file.
        strict = true //Strict will fail the execution if there is any undefined step file
)

public class BDDRunner {

}
