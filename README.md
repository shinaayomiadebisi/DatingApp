# .NET

dotnet --info
dotnet -h
dotnet new -h
dotnet new list
dotnet new gitignore

dotnet new sln
dotnet new webapi -o API
dotnet sln add API

<!-- Trust https certificate -->

dotnet dev-certs https --trust

<!-- for continuos changes   -->

dotnet watch run

https://nuget.org
dotnet tool install --global dotnet-ef --version 11.0.0-preview.6.26359.118

dotnet ef migrations add InitialCreate -o Data/Migrations

To undo this action, use 'ef migrations remove'

dotnet ef database update

# ANGULAR

npm install -g @angular/cli

### To create project and remove strict from Angular

ng new client --strict false

### To remove share pseudonymous usage data about this project with the Angular Team at Google under Google's Privacy Policy at https://policies.google.com/privacy. For more details and how to change this setting, see https://angular.dev/cli/analytics

ng analytics disable --global

<!-- To start Angular server -->

ng serve

Tutorial Link: https://www.youtube.com/watch?v=3IQBMnijm6Y&list=PLaR3RrvBxlc21kp7BmrBqDQ7xSZjx3p_-

https://github.com/trycatchlearn
