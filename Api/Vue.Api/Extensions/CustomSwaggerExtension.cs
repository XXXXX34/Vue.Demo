using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.OpenApi.Models;
using Swashbuckle.AspNetCore.Filters;

namespace Vue.Api.Extensions
{
    public static class CustomSwaggerExtension
    {
        public static IServiceCollection AddCustomSwagger(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddSwaggerGen(options =>
            {
                options.DescribeAllEnumsAsStrings();
                options.SwaggerDoc("v1", new OpenApiInfo
                {
                    Title = "Vue HTTP API",
                    Version = "v1",
                    Description = "The Vue Service HTTP API",
                });

                var basePath = AppDomain.CurrentDomain.BaseDirectory;
                var apiDocPath = Path.Combine(basePath, "Vue.Api.xml");
                options.IncludeXmlComments(apiDocPath);

                options.OperationFilter<AddResponseHeadersFilter>();
                options.OperationFilter<AppendAuthorizeToSummaryOperationFilter>();
                options.OperationFilter<SecurityRequirementsOperationFilter>();
                options.AddSecurityDefinition("oauth2", new OpenApiSecurityScheme
                {
                    In = ParameterLocation.Header,
                    Type = SecuritySchemeType.OAuth2,
                    Flows = new OpenApiOAuthFlows()
                    {
                        Implicit = new OpenApiOAuthFlow()
                        {
                            AuthorizationUrl = new Uri($"{configuration.GetValue<string>("IdeneityServerHostAddress")}/connect/authorize"),
                            TokenUrl = new Uri($"{configuration.GetValue<string>("IdeneityServerHostAddress")}/connect/token"),
                            Scopes = new Dictionary<string, string>()
                            {
                                { "vue.api", "vue.api" }
                            }
                        }
                    }
                });
            });

            return services;
        }
    }
}
