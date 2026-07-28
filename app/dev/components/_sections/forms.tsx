import { AtSignIcon, MailIcon, SearchIcon } from "lucide-react";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

import { GallerySection, Sample } from "./section-card";

export function FormsSection() {
  return (
    <GallerySection
      id="forms"
      title="Forms"
      description="Inputs, textareas, selects, and grouped controls. Try Tab — every focus ring should be 3px ring + 1px border."
    >
      <Sample label="Input — states">
        <div className="grid w-full max-w-md gap-3">
          <div className="space-y-1.5">
            <Label htmlFor="gallery-email">Email</Label>
            <Input id="gallery-email" type="email" placeholder="you@company.com" />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="gallery-email-invalid">Email — invalid</Label>
            <Input
              id="gallery-email-invalid"
              type="email"
              defaultValue="not-an-email"
              aria-invalid="true"
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="gallery-email-disabled">Email — disabled</Label>
            <Input
              id="gallery-email-disabled"
              type="email"
              placeholder="you@company.com"
              disabled
            />
          </div>
        </div>
      </Sample>

      <Sample label="Textarea — states">
        <div className="grid w-full max-w-md gap-3">
          <div className="space-y-1.5">
            <Label htmlFor="gallery-message">Message</Label>
            <Textarea id="gallery-message" placeholder="Tell us about your project…" rows={3} />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="gallery-message-invalid">Message — invalid</Label>
            <Textarea
              id="gallery-message-invalid"
              defaultValue="Too short"
              aria-invalid="true"
              rows={3}
            />
          </div>
        </div>
      </Sample>

      <Sample label="Select" description='Uncontrolled, defaultValue="web-dev".'>
        <div className="grid w-full max-w-md gap-3">
          <div className="space-y-1.5">
            <Label htmlFor="gallery-service">Service</Label>
            <Select defaultValue="web-dev">
              <SelectTrigger id="gallery-service" className="w-full">
                <SelectValue placeholder="Pick a service" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Build & design</SelectLabel>
                  <SelectItem value="web-dev">Web development</SelectItem>
                  <SelectItem value="e-commerce">E-commerce</SelectItem>
                  <SelectItem value="ui-ux">UI / UX design</SelectItem>
                </SelectGroup>
                <SelectSeparator />
                <SelectGroup>
                  <SelectLabel>Growth & ops</SelectLabel>
                  <SelectItem value="seo">SEO</SelectItem>
                  <SelectItem value="ai-integration">AI integration</SelectItem>
                  <SelectItem value="crm">CRM</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </Sample>

      <Sample label="InputGroup — icon addons">
        <div className="grid w-full max-w-md gap-3">
          <InputGroup>
            <InputGroupAddon align="inline-start">
              <SearchIcon />
            </InputGroupAddon>
            <InputGroupInput aria-label="Search services" placeholder="Search services…" />
          </InputGroup>
          <InputGroup>
            <InputGroupAddon align="inline-start">
              <MailIcon />
            </InputGroupAddon>
            <InputGroupInput
              aria-label="Email username"
              type="email"
              placeholder="you@company.com"
            />
            <InputGroupAddon align="inline-end">
              <InputGroupText>@naxdor.com</InputGroupText>
            </InputGroupAddon>
          </InputGroup>
          <InputGroup>
            <InputGroupAddon align="inline-start">
              <AtSignIcon />
            </InputGroupAddon>
            <InputGroupInput aria-label="Handle" defaultValue="invalid value" aria-invalid="true" />
          </InputGroup>
        </div>
      </Sample>
    </GallerySection>
  );
}
