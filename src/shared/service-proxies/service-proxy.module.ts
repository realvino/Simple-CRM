﻿import { NgModule } from '@angular/core';

import * as ApiServiceProxies from './service-proxies';

@NgModule({
    providers: [
        ApiServiceProxies.AuditLogServiceProxy,
        ApiServiceProxies.CachingServiceProxy,
        ApiServiceProxies.ChatServiceProxy,
        ApiServiceProxies.CommonLookupServiceProxy,
        ApiServiceProxies.EditionServiceProxy,
        ApiServiceProxies.FriendshipServiceProxy,
        ApiServiceProxies.HostSettingsServiceProxy,
        ApiServiceProxies.LanguageServiceProxy,
        ApiServiceProxies.NotificationServiceProxy,
        ApiServiceProxies.OrganizationUnitServiceProxy,
        ApiServiceProxies.PermissionServiceProxy,
        ApiServiceProxies.ProfileServiceProxy,
        ApiServiceProxies.RoleServiceProxy,
        ApiServiceProxies.SessionServiceProxy,
        ApiServiceProxies.TenantServiceProxy,
        ApiServiceProxies.TenantDashboardServiceProxy,
        ApiServiceProxies.TenantSettingsServiceProxy,
        ApiServiceProxies.TimingServiceProxy,
        ApiServiceProxies.UserServiceProxy,
        ApiServiceProxies.UserLinkServiceProxy,
        ApiServiceProxies.UserLoginServiceProxy,
        ApiServiceProxies.WebLogServiceProxy,
        ApiServiceProxies.AccountServiceProxy,
        ApiServiceProxies.TokenAuthServiceProxy,
        ApiServiceProxies.TenantRegistrationServiceProxy,
        ApiServiceProxies.HostDashboardServiceProxy,
        ApiServiceProxies.PaymentServiceProxy,
        ApiServiceProxies.DemoUiComponentsServiceProxy,
        ApiServiceProxies.CountryServiceProxy,
        ApiServiceProxies.LocationServiceProxy,
        ApiServiceProxies.CityServiceProxy,
        ApiServiceProxies.Select2ServiceProxy,
        ApiServiceProxies.ProductGroupServiceProxy,
        ApiServiceProxies.ProductSubGroupServiceProxy,
        ApiServiceProxies.RegionServiceProxy,
        ApiServiceProxies.CompanyServiceProxy,
        ApiServiceProxies.SourceServiceProxy,
        ApiServiceProxies.MileStoneServiceProxy,
        ApiServiceProxies.ActivityServiceProxy,
        ApiServiceProxies.LeadTypeServiceProxy,
        ApiServiceProxies.LeadReasonServiceProxy,
		ApiServiceProxies.InquiryServiceProxy,
		ApiServiceProxies.EnquiryUpdateServiceProxy,
        ApiServiceProxies.LineTypeServiceProxy,
        ApiServiceProxies.DepartmentServiceProxy,
        ApiServiceProxies.NewCompanyContactServiceProxy,
        ApiServiceProxies.NewCustomerTypeServiceProxy,
        ApiServiceProxies.NewInfoTypeServiceProxy,
		ApiServiceProxies.EnquiryContactServiceProxy,
		ApiServiceProxies.EnquiryStatusServiceProxy,
		ApiServiceProxies.IndustryServiceProxy,
        ApiServiceProxies.ProductServiceProxy,
        ApiServiceProxies.PriceLevelServiceProxy,
        ApiServiceProxies.OrientationServiceProxy,
        ApiServiceProxies.ProductTypeServiceProxy,
        ApiServiceProxies.DimensionServiceProxy,
        ApiServiceProxies.ColorCodeServiceProxy,
        ApiServiceProxies.ProductAttributeServiceProxy,
        ApiServiceProxies.ProductFamilyServiceProxy,
        ApiServiceProxies.AttributeGroupServiceProxy,
        ApiServiceProxies.ProductSpecificationServiceProxy,
        ApiServiceProxies.CollectionServiceProxy,
        ApiServiceProxies.QuotationStatusServiceProxy,
        ApiServiceProxies.QuotationServiceProxy,
        ApiServiceProxies.TeamServiceProxy,
        ApiServiceProxies.TemporaryProductServiceProxy,
        ApiServiceProxies.ProductCategoryServiceProxy,
        ApiServiceProxies.OpportunitySourceServiceProxy,
        ApiServiceProxies.YbafcoServiceProxy,
        ApiServiceProxies.EmaildomainServiceProxy,
        ApiServiceProxies.LeadStatusServiceProxy,
        ApiServiceProxies.UserDesignationServiceProxy,
        ApiServiceProxies.ContactDesignationServiceProxy,
        ApiServiceProxies.ViewServiceProxy


    ]
})
export class ServiceProxyModule { }
