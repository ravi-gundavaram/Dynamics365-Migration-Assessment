using Microsoft.Xrm.Sdk;

public class DeclinePlugin : IPlugin
{
    public void Execute(IServiceProvider serviceProvider)
    {
        IPluginExecutionContext context = (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext));
        IOrganizationServiceFactory serviceFactory = (IOrganizationServiceFactory)serviceProvider.GetService(typeof(IOrganizationServiceFactory));
        IOrganizationService service = serviceFactory.CreateOrganizationService(context.UserId);

        // Retrieve email address from context and log decline
        string emailAddress = (string)context.InputParameters["EmailAddress"];
        Entity declineRecord = new Entity("new_decline");
        declineRecord["new_email"] = emailAddress;
        declineRecord["new_declinereason"] = "User declined invite";
        
        service.Create(declineRecord);
    }
}
