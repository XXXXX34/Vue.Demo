using System;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace Vue.Api.Extensions
{
    public static class CustomAuthentication
    {
        public static IServiceCollection AddCustomAuthentication(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddAuthentication("Bearer")
           .AddIdentityServerAuthentication(options =>
               {
                   options.Authority = configuration.GetSection("IdeneityServerHostAddress").Value;
                   options.ApiSecret = "secret";
                   options.ApiName = "vue.api";
                   options.SaveToken = false;
                   options.RequireHttpsMetadata = false;
               });
            return services;
        }
    }
}
