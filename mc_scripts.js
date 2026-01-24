SnapExtensions.primitives.set(
  'mc_setMochiLogo()',
  function () {
    IDE_Morph.prototype.createLogo = function () {
      var myself = this;

      if (this.logo) {
        this.logo.destroy();
      }

      this.logo = new Morph();
     
      this.logo.texture = "data:image/png;base64," +
        "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";

      this.logo.render = function (ctx) {
        var gradient = ctx.createLinearGradient(
          0,
          0,
          this.width(),
          0
          );
        gradient.addColorStop(0, 'black');
        gradient.addColorStop(0.5, myself.frameColor.toString());
        ctx.fillStyle = MorphicPreferences.isFlat ?
          myself.frameColor.toString() : gradient;
        ctx.fillRect(0, 0, this.width(), this.height());
        if (this.cachedTexture) {
          this.renderCachedTexture(ctx);
        } else if (this.texture) {
          this.renderTexture(this.texture, ctx);
        }
      };

      this.logo.renderCachedTexture = function (ctx) {
        ctx.drawImage(
          this.cachedTexture,
          5,
          Math.round((this.height() - this.cachedTexture.height) / 2)
          );
        this.changed();
      };

      this.logo.mouseClickLeft = function () {
        myself.snapMenu();
      };

      this.logo.color = BLACK;
      this.logo.setExtent(new Point(200, 28)); // dimensions are fixed
      this.add(this.logo);
    };
    var stage = this.parentThatIsA(StageMorph),
      ide = stage.parentThatIsA(IDE_Morph),
      world = stage.parentThatIsA(WorldMorph);
    ide.createLogo();
    ide.createControlBar();
    ide.fixLayout();
  }
);

SnapExtensions.primitives.set(
    'mc_split(textToSplit, index)',
    function (textToSplit, index ,proc) {
      var tokensArray = textToSplit.slice(3).split(",");
      if (index > tokensArray.length-1) {
        return -1; // error, index over array length
      } else {
        return tokensArray[index];	
      }
    }
);

SnapExtensions.primitives.set(
    'mc_isopen(port)',
    function (port, proc) {
      return (port?.writable != null)   
    }
);

SnapExtensions.primitives.set(
    'mc_open(baud, buffer)',
    function (baud, buf, proc) {
        var acc = proc.context.accumulator;
        // define a filter for CH340 serial to USB device
        const filter_mc2 =  { usbVendorId: 0x1A86, usbProductId: 0x7523 }; // CH340G usb to serial present int MC2
        const filter_mc3 =  { usbVendorId: 0x0403, usbProductId: 0x6001 }; // FTDI usb to serial present int MC3
                        
        async function forceClose(port){
            try {
                if (!port?.writable) {return; } // already closed
                // console.log("force close...", port);
                if (port._reader) {await port._reader.cancel(); }
                if (port?.readable) {await port.readable.cancel(); }
                if (port?.writable) {await port.writable.abort(); }
                if (port?.writable) {await port.close(); } // close if open
            } catch (e) {
                // console.log( e);
                acc.result = e;
            }
        }

        if (!acc) {
            acc = proc.context.accumulator = {result: false};
            (async function (baud) {
                try {
                    var port;
                    port = await navigator.serial.requestPort({ filters: [filter_mc2, filter_mc3] });
                    await forceClose(port);
                    await port.open({
                        baudRate: baud,
                        bufferSize: buf || 15000
                    });
                    acc.result = port;
                    port._bklog = [];//backlog
                } catch(e) {
                    acc.result = e;
                }
            }) (baud || 115200);
        } else if (acc.result !== false) {
            if (acc.result instanceof  Error) {
                throw acc.result;
            }
            return acc.result;
        }
        proc.pushContext('doYield');
        proc.pushContext();
    }
);


SnapExtensions.primitives.set(
  'mc_isValidFrame(frame)',
  function (frame, proc) {
    try {
      return (frame.slice(0,3) === '#0A');
    } catch(e) {
      return false;
    }
  }
);

SnapExtensions.primitives.set(
  'mc_buildFrame(fun, payload)',
  function (fun, payload, proc) {
    var frame = new List(Array.from(new TextEncoder().encode('#'+fun+payload+'\n')));
    return frame;
  }
);




