def on_button_pressed_b():
    basic.show_leds("""
        . # # # .
                # # . . .
                # # # # .
                . # # # .
                . # . # .
    """)
    music.play_melody("C5 D A F F A D C5 ", 120)
input.on_button_pressed(Button.B, on_button_pressed_b)
