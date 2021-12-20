#pragma once

#include <memory>
#include <string>

#include <ReactCommon/JavaTurboModule.h>

namespace facebook {
    namespace react {

        std::shared_ptr<TurboModule> SampleLibraryModuleProvider(const std::string moduleName, const JavaTurboModule::InitParams &params);

    } // namespace react
} // namespace facebook
