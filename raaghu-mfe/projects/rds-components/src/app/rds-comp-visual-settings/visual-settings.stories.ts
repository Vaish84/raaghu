import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsButtonModule, RdsCheckboxModule, RdsIconModule, RdsNavTabModule, RdsSelectListModule, RdsLabelModule } from '@libs/rds-elements';
import { NgxTranslateModule } from '@libs/shared';
import { RdsCompVisualSettingsComponent } from './rds-comp-visual-settings.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

export default {
    title: 'Components/VisualSettings',
    component: RdsCompVisualSettingsComponent,
    decorators: [
        moduleMetadata({
            imports: [
                FormsModule,
                ReactiveFormsModule,
                RdsIconModule,
                RdsNavTabModule,
                RdsSelectListModule,
                RdsCheckboxModule,
                RdsButtonModule,
                CommonModule,
                RdsLabelModule,
                NgxTranslateModule.forRoot()
            ],
        })
    ]
} as Meta;

const Template: Story<RdsCompVisualSettingsComponent> = (args: RdsCompVisualSettingsComponent) => ({
    props: {
        ...args
    }
});

export const Default = Template.bind({});
Default.args = {
    visualsettingsItem: [{
        footer: { fixedFooter: false }
        , header: { desktopFixedHeader: true, mobileFixedHeader: true, headerSkin: null, minimizeDesktopHeaderType: null }
        , layout: { layoutType: "fluid" }
        , menu: {
            allowAsideMinimizing: false, asideSkin: "dark", defaultMinimizedAside: false, enableSecondary: false, fixedAside: false
            , hoverableAside: false, position: "tab", searchActive: false, submenuToggle: null
        }
        , subHeader: {
            containerStyle: "subheader py-2 py-lg-4  subheader-transparent", fixedSubHeader: false, subheaderSize: 5, subheaderStyle: null
            , titleStlye: "text-dark font-weight-bold my-2 mr-5"
        }
        , theme: "theme1"
    }
        , {
        footer: { fixedFooter: false }
        , header: { desktopFixedHeader: true, mobileFixedHeader: true, headerSkin: null, minimizeDesktopHeaderType: null }
        , layout: { layoutType: "fluid" }
        , menu: {
            allowAsideMinimizing: false, asideSkin: "dark", defaultMinimizedAside: false, enableSecondary: false, fixedAside: false
            , hoverableAside: false, position: "tab", searchActive: false, submenuToggle: null
        }
        , subHeader: {
            containerStyle: "subheader py-2 py-lg-4  subheader-transparent", fixedSubHeader: false, subheaderSize: 5, subheaderStyle: null
            , titleStlye: "text-dark font-weight-bold my-2 mr-5"
        }
        , theme: "theme2"
    }
        , {
        footer: { fixedFooter: true }
        , header: { desktopFixedHeader: true, mobileFixedHeader: true, headerSkin: null, minimizeDesktopHeaderType: null }
        , layout: { layoutType: "fluid" }
        , menu: {
            allowAsideMinimizing: false, asideSkin: "dark", defaultMinimizedAside: false, enableSecondary: false, fixedAside: false
            , hoverableAside: false, position: "tab", searchActive: false, submenuToggle: null
        }
        , subHeader: {
            containerStyle: "subheader py-2 py-lg-4  subheader-transparent", fixedSubHeader: false, subheaderSize: 5, subheaderStyle: null
            , titleStlye: "text-dark font-weight-bold my-2 mr-5"
        }
        , theme: "default"
    }],
    navtabItems: [
        { label: 'Subheader', tablink: '#nav-subheader', ariacontrols: 'nav-subheader', translateKey: 'Subheader' },
        { label: 'Menu', tablink: '#nav-Menu', ariacontrols: 'nav-Menu', translateKey: 'Menu' },
        { label: 'Footer', tablink: '#nav-footer', ariacontrols: 'nav-footer', translateKey: 'Footer' }
    ]
    , listskin: [
        { value: 'dark', displayText: 'Dark' },
        { value: 'light', displayText: 'Light' },
    ]
    , listSubmenu: [
        { value: 'false', displayText: 'Accordian' },
        { value: 'true', displayText: 'Dropdown' },
    ]
}
