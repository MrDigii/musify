import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { invoke } from "@tauri-apps/api/core";
import { ZardButtonComponent } from "@/shared/components/button/button.component";
import { ZardInputComponent } from "@/shared/components/input/input.component";

@Component({
    selector: "app-root",
    imports: [RouterOutlet, ZardButtonComponent, ZardInputComponent],
    templateUrl: "./app.component.html",
    styleUrl: "./app.component.css",
})
export class AppComponent {
    greetingMessage = "";

    greet(event: SubmitEvent, name: string): void {
        event.preventDefault();

        // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
        invoke<string>("greet", { name }).then((text) => {
            this.greetingMessage = text;
        });
    }
}
