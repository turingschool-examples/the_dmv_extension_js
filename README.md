# The DMV - JS Extension

You've built it in Ruby -- now let's take a look at what some of these objects would look like in JavaScript! 

## Installation Steps

1. Fork and clone this repo.
2. Type `cd the_dmv_extension_js` to move into the root directory
3. Run `npm install`
4. Test that the unit tests are working by running the command `npm test dmv/test/registrant-test.js` in your terminal

You should see something like:

```shell
> foundations@1.0.0 test
> mocha dmv/test/registrant-test.js

  Registrant
    - 

    pry(main)> registrant_1 = Registrant.new('Bruce', 18, true )
#=> #<Registrant:0x000000015c10bed8 @age=18, @license_data={:written=>false, :license=>false, :renewed=>false}, @name="Bruce", @permit=true>

pry(main)> registrant_2 = Registrant.new('Penny', 15 )
#=> #<Registrant:0x000000015c0778c8 @age=15, @license_data={:written=>false, :license=>false, :renewed=>false}, @name="Penny", @permit=false>

pry(main)> registrant_1.name
#=> "Bruce"

pry(main)> registrant_1.age
#=> 18

pry(main)> registrant_1.permit?
#=> true

pry(main)> registrant_1.license_data
#=> {:written=>false, :license=>false, :renewed=>false}

pry(main)> registrant_2.name
#=> "Penny"

pry(main)> registrant_2.age
#=> 15

pry(main)> registrant_2.permit?
#=> false

pry(main)> registrant_2.license_data
#=> {:written=>false, :license=>false, :renewed=>false}

pry(main)> registrant_2.earn_permit

pry(main)> registrant_2.permit?
#=> true