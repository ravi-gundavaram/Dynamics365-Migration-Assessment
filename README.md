# Dynamics365-Migration-Assessment

This repository contains the code, documentation, and pipelines required for migrating Dynamics 365 from an on-premise setup to the cloud. The tasks covered include Dynamics 365 customizations, plugin development, Angular app functionality, and Azure Data Factory ETL pipelines.

# Project Overview

1. **Task 1**: Dynamics 365 Customization
   - Customization of the Lead entity by adding custom fields, form scripts, and ribbon adjustments.
   - Automation of the lead qualification process using Power Automate and plugins.
   - Strategy for secure and efficient data migration to the cloud, ensuring entity relationships and security roles are preserved.

2. **Task 2**: C# Plugins and Angular App
   - Development of a C# plugin to handle declined event invitations and log them in Dynamics 365.
   - Creation of an Angular application to allow users to decline event invitations and update the data in Dynamics 365.
   - A notification system in Angular that displays pending tasks retrieved through FetchXML queries.

3. **Task 3**: Azure Data Factory ETL Pipelines
   - Integration of Azure API Management to connect securely with on-premise APIs.
   - Azure Data Factory pipelines for migrating leads, contacts, and tasks from Dynamics 365 on-premise to the cloud environment while maintaining metadata like `createdOn`, `createdBy`, and `modifiedBy`.

To test the code

1. Dynamics 365 Plugin Testing:
Set Up a Dynamics 365 Development Environment:

Use a Dynamics 365 Sandbox or trial environment.
Register plugins using the Plugin Registration Tool from the Power Platform Tools.
Ensure necessary permissions in the environment to register plugins.
Deploy and Test LeadCustomizationPlugin:

Open Visual Studio and build the plugin project.
Use the Plugin Registration Tool to register LeadCustomizationPlugin on the Create or Update message for the Lead entity.
Test the plugin by creating or updating a lead in Dynamics 365 to see if the custom field new_customfield is set correctly.
Debugging: Use ILSpy or enable Profiler in the Plugin Registration Tool to debug any errors.
Deploy and Test DeclinePlugin:

Register DeclinePlugin on a custom message if it’s triggered by an API call or associate it with an entity action.
Trigger the plugin by calling the API endpoint with test data and verify if the decline information is recorded correctly.
2. Angular Application Testing:
Set Up Angular Environment:

Ensure Node.js and Angular CLI are installed.
Navigate to the Angular app directory and install dependencies:

cd Task2_CSharp_Plugins_Angular_App/AngularApp
npm install
Run and Test the Angular App:

Start the Angular development server:

ng serve
Access the app locally via http://localhost:4200.

Test the Decline Invite functionality:
Enter a test email and click the "Decline Invitation" button.
Ensure the API call is successful (verify in browser console or network tab).
Use a mock backend or set up a testing API endpoint that mirrors Dynamics 365 to handle the decline response.
Test Notification System:

Ensure the notification component correctly retrieves and displays pending tasks.
Simulate the /api/fetchTasks endpoint with a local JSON server or mock data if the backend is not available.
3. Azure Data Factory Pipeline Testing:
Azure Data Factory Configuration:

Set up an Azure Data Factory (ADF) instance.
Import the pipeline JSON files (DataPipeline.json, ContactMigrationPipeline.json, and LeadsMigrationPipeline.json) into ADF.
Configure Linked Services for data sources, such as SQL Server (or another supported database) and Dynamics 365.
Pipeline Execution:

Run each pipeline in Debug Mode in ADF to verify data migration and transformations.
Test lookup functionality by ensuring it retrieves the correct records.
Ensure that Upsert operations are handled correctly in Dynamics 365 by validating records after the pipeline run.
Testing On-Premises Connectivity (if applicable):

Use Azure API Management with a self-hosted integration runtime if you need to connect to on-premises resources. Test both GET and POST operations to ensure data flows as expected.
Verify that the pipelines maintain relationships and metadata (createdOn, createdBy, etc.).
4. General Debugging and Validation:
Logs and Error Tracking:

Use logs for plugin actions (add TracingService in plugins) to capture and review any errors or unexpected behavior.
Ensure Angular and ADF provide clear error messages or logs if there are any issues.

Data Verification:

After running pipelines, verify data integrity in Dynamics 365 by checking if all fields are migrated correctly and security roles are respected.
Setup Instructions
Prerequisites
Dynamics 365 Sandbox or Trial Environment for plugin testing.
Azure Subscription for setting up Azure Data Factory and API Management.
Node.js and Angular CLI for running the Angular application.

Task 1: Dynamics 365 Plugin Registration
Open the lead_customization_plugin.cs and DeclinePlugin.cs files in Visual Studio.
Build the project to create a DLL file.
Use the Plugin Registration Tool from Power Platform Tools to register both plugins in your Dynamics 365 environment.
Register LeadCustomizationPlugin on the Create or Update message for the Lead entity and DeclinePlugin for custom decline tracking.

Task 2: Angular Application Setup
Navigate to the Task2_CSharp_Plugins_Angular_App/AngularApp directory.
Install dependencies:

npm install
Start the Angular development server:

ng serve
Access the application at http://localhost:4200 to test the invite decline functionality and notification system.

Task 3: Azure Data Factory Pipeline Setup
Import DataPipeline.json, ContactMigrationPipeline.json, and LeadsMigrationPipeline.json into Azure Data Factory.
Configure linked services for on-premise SQL Server and Dynamics 365.
Run each pipeline in Debug Mode to validate data migration processes.
Testing Instructions
Dynamics 365 Plugin Testing
LeadCustomizationPlugin:

Create or update a lead in Dynamics 365 and verify the custom field new_customfield is set as expected.
Check logs and error messages in Dynamics 365 to ensure correct plugin execution.
DeclinePlugin:

Trigger the plugin via an API call or custom message, simulating a decline response.
Confirm that a new record in the custom decline entity captures the decline information accurately.
Angular Application Testing
Decline Invitation:

Enter a test email in the Angular app and click "Decline Invitation".
Verify that the decline action updates Dynamics 365 appropriately.
Check browser console logs and network requests for successful API interactions.
Notification System:

Ensure the pending tasks are displayed correctly in the notification component.
Simulate the /api/fetchTasks API response locally if needed for testing.
Azure Data Factory Pipeline Testing
Run Pipelines:

In Azure Data Factory, run each pipeline in debug mode and monitor activity runs.
Verify that the Lookup and Copy activities fetch and upsert data into Dynamics 365 correctly.
Confirm that metadata (e.g., createdOn, createdBy) is maintained during migration.
On-Premises API Testing:

Use Azure API Management to test secure connections to on-premises APIs.
Verify data flow between Dynamics 365 and on-premises systems by running sample GET and POST requests.

Plugins: The LeadCustomization and Decline plugins should update and log data in Dynamics 365 as designed.
Angular App: The app should allow users to decline invitations, with updates reflected in Dynamics 365. Pending tasks should display in the notification component.
Data Pipelines: Pipelines should migrate data accurately, preserving metadata, with successful runs showing in Azure Data Factory.
Troubleshooting

Plugin Errors: Use the Plugin Registration Tool Profiler for detailed debugging if plugins fail.
Angular App Issues: Check console logs for network errors and verify API endpoints are configured correctly.
Pipeline Errors: Monitor Azure Data Factory activity logs and ensure Linked Services are configured correctly.
